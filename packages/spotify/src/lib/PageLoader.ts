import type { Spotify } from "./spotify";
import type { SpotifyManager } from "./SpotifyManager";
import { range } from "./utilities/range";
import { format } from "node:util";

export class PageLoader {
    readonly baseUrl: string;

    readonly strategy: PageLoadingStrategy;

    readonly fetchPage: PageLoaderOptions["fetchPage"];

    constructor(options: PageLoaderOptions) {
        this.baseUrl = options.baseUrl;

        this.strategy = options.strategy;

        this.fetchPage = options.fetchPage;
    }

    static createPages(trackCount: number, strategy: PageLoadingStrategy): number[] {
        return range(1, Math.min(Math.floor(trackCount / strategy.size), strategy.limit - 1), 1);
    }

    async load(
        manager: SpotifyManager,
        resourceId: string,
        data: InitialData
    ): Promise<Spotify.Track[]> {
        const tracks = data.tracks;
        if (data.total === -1) {
            // TODO:
        } else if (tracks.length < data.total) {
            const pages = PageLoader.createPages(data.total, this.strategy);

            let toAdd: Spotify.Track[];
            if (this.strategy.type === "parallel") {
                const resolved = await Promise.all(
                    pages
                        .map(page => this.createUrl(resourceId, page))
                        .map(path => this.fetchPage(manager, path))
                );

                toAdd = resolved.flat();
            } else {
                toAdd = [];
                for (const page of pages) {
                    const path = this.createUrl(resourceId, page);
                    toAdd.push(...await this.fetchPage(manager, path));
                }
            }

            tracks.push(...toAdd);
        }

        return tracks;
    }

    private createUrl(resourceId: string, page: number): string {
        // eslint-disable-next-line prefer-template
        return format(this.baseUrl, resourceId)
            + `?limit=${this.strategy.size}`
            + `&offset=${this.strategy.size * page}`;
    }
}

export interface PageLoaderOptions {
    baseUrl: string;
    strategy: PageLoadingStrategy;
    fetchPage: (manager: SpotifyManager, path: string) => Promise<Spotify.Track[]>;
}

export interface PageLoadingStrategy {
    /**
     * Whether to load pages sequentially or in parallel
     */
    type: "parallel" | "sequential";

    /**
     * The number of pages to load.
     */
    limit: number;

    /**
     * The size of each page.
     */
    size: number;
}

export interface InitialData {
    tracks: Spotify.Track[];
    total: number;
}
