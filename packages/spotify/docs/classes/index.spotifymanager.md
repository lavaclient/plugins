[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / SpotifyManager

# Class: SpotifyManager

[index](../modules/index.md).SpotifyManager

## Hierarchy

* **SpotifyManager**

## Table of contents

### Constructors

- [constructor](index.spotifymanager.md#constructor)

### Properties

- [#clientId](index.spotifymanager.md##clientid)
- [#clientSecret](index.spotifymanager.md##clientsecret)
- [#token](index.spotifymanager.md##token)
- [albumLimit](index.spotifymanager.md#albumlimit)
- [autoResolveYoutubeVideos](index.spotifymanager.md#autoresolveyoutubevideos)
- [lavaclient](index.spotifymanager.md#lavaclient)
- [loaders](index.spotifymanager.md#loaders)
- [options](index.spotifymanager.md#options)
- [playlistLimit](index.spotifymanager.md#playlistlimit)
- [BASE\_URL](index.spotifymanager.md#base_url)

### Accessors

- [clientId](index.spotifymanager.md#clientid)
- [clientSecret](index.spotifymanager.md#clientsecret)
- [encoded](index.spotifymanager.md#encoded)
- [token](index.spotifymanager.md#token)

### Methods

- [isSpotifyUrl](index.spotifymanager.md#isspotifyurl)
- [load](index.spotifymanager.md#load)
- [makeRequest](index.spotifymanager.md#makerequest)
- [renew](index.spotifymanager.md#renew)

## Constructors

### constructor

\+ **new SpotifyManager**(`lavaclient`: *Manager*, `options`: [*SpotifyManagerOptions*](../interfaces/spotifymanager.spotifymanageroptions.md)): [*SpotifyManager*](spotifymanager.spotifymanager-1.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`lavaclient` | *Manager* | The lavaclient manager.   |
`options` | [*SpotifyManagerOptions*](../interfaces/spotifymanager.spotifymanageroptions.md) | The options for this spotify manager.    |

**Returns:** [*SpotifyManager*](spotifymanager.spotifymanager-1.md)

Defined in: [SpotifyManager.ts:60](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L60)

## Properties

### #clientId

• `Private` `Readonly` **#clientId**: *string*

The client id.

Defined in: [SpotifyManager.ts:54](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L54)

___

### #clientSecret

• `Private` `Readonly` **#clientSecret**: *string*

The client secret.

Defined in: [SpotifyManager.ts:60](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L60)

___

### #token

• `Private` **#token**: *null* \| *string*= null

The token to use.

Defined in: [SpotifyManager.ts:48](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L48)

___

### albumLimit

• **albumLimit**: *number*

Total number of pages to load, each page having 50 tracks.

Defined in: [SpotifyManager.ts:42](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L42)

___

### autoResolveYoutubeVideos

• **autoResolveYoutubeVideos**: *boolean*

Whether to automatically resolve track youtube videos

Defined in: [SpotifyManager.ts:32](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L32)

___

### lavaclient

• `Readonly` **lavaclient**: *Manager*

The lavaclient manager.

Defined in: [SpotifyManager.ts:17](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L17)

___

### loaders

• **loaders**: [*Loader*](abstract/loader.loader.md)[]

The enabled loaders.

Defined in: [SpotifyManager.ts:27](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L27)

___

### options

• `Readonly` **options**: [*SpotifyManagerOptions*](../interfaces/spotifymanager.spotifymanageroptions.md)

The options provided to the spotify manager.

Defined in: [SpotifyManager.ts:22](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L22)

___

### playlistLimit

• **playlistLimit**: *number*

Total numbers of pages to load, each page having 100 tracks.

Defined in: [SpotifyManager.ts:37](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L37)

___

### BASE\_URL

▪ `Readonly` `Static` **BASE\_URL**: *https://api.spotify.com/v1*= "https://api.spotify.com/v1"

Defined in: [SpotifyManager.ts:12](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L12)

## Accessors

### clientId

• **clientId**(): *string*

The client id provided.

**Returns:** *string*

Defined in: [SpotifyManager.ts:91](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L91)

___

### clientSecret

• **clientSecret**(): *string*

The client secret provided.

**Returns:** *string*

Defined in: [SpotifyManager.ts:98](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L98)

___

### encoded

• `Private`**encoded**(): *string*

The authorization used for tokens.

**Returns:** *string*

Defined in: [SpotifyManager.ts:84](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L84)

___

### token

• **token**(): *null* \| *string*

The current access token.

**Returns:** *null* \| *string*

Defined in: [SpotifyManager.ts:105](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L105)

## Methods

### isSpotifyUrl

▸ **isSpotifyUrl**(`url`: *string*): *boolean*

Determine whether a URL is a spotify url.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`url` | *string* | The url to test.    |

**Returns:** *boolean*

Defined in: [SpotifyManager.ts:113](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L113)

___

### load

▸ **load**(`url`: *string*): *Promise*<*null* \| [*SpotifyTrack*](item/spotifytrack.spotifytrack.md) \| [*SpotifyAlbum*](item/spotifyalbum.spotifyalbum.md) \| [*SpotifyPlaylist*](item/spotifyplaylist.spotifyplaylist.md)\>

Loads a spotify resource with the provided url.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`url` | *string* | The playlist, track, or album url to load.   |

**Returns:** *Promise*<*null* \| [*SpotifyTrack*](item/spotifytrack.spotifytrack.md) \| [*SpotifyAlbum*](item/spotifyalbum.spotifyalbum.md) \| [*SpotifyPlaylist*](item/spotifyplaylist.spotifyplaylist.md)\>

The loaded spotify resource.

Defined in: [SpotifyManager.ts:142](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L142)

___

### makeRequest

▸ **makeRequest**<T\>(`endpoint`: *string*, `prefixBaseUrl?`: *boolean*): *Promise*<T\>

Makes a request to the spotify api.

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | *Record*<*string*, *any*\> | *Record*<*string*, *any*\\> |

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`endpoint` | *string* | - | If prefixing with the base url, the endpoint. Or full URL.   |
`prefixBaseUrl` | *boolean* | true | Whether to prefix the endpoint with the api base url.    |

**Returns:** *Promise*<T\>

Defined in: [SpotifyManager.ts:123](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L123)

___

### renew

▸ **renew**(): *Promise*<*void*\>

Requests the spotify token and schedules to renew it.

**Returns:** *Promise*<*void*\>

Defined in: [SpotifyManager.ts:179](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyManager.ts#L179)
