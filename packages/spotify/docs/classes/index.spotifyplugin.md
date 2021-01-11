[@lavaclient/spotify](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / SpotifyPlugin

# Class: SpotifyPlugin

[index](../modules/index.md).SpotifyPlugin

## Hierarchy

* *Plugin*

  ↳ **SpotifyPlugin**

## Table of contents

### Constructors

- [constructor](index.spotifyplugin.md#constructor)

### Properties

- [options](index.spotifyplugin.md#options)
- [spotify](index.spotifyplugin.md#spotify)

### Methods

- [load](index.spotifyplugin.md#load)
- [search](index.spotifyplugin.md#search)

## Constructors

### constructor

\+ **new SpotifyPlugin**(`options`: [*SpotifyManagerOptions*](../interfaces/spotifymanager.spotifymanageroptions.md)): [*SpotifyPlugin*](spotifyplugin.spotifyplugin-1.md)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | [*SpotifyManagerOptions*](../interfaces/spotifymanager.spotifymanageroptions.md) | The spotify manager options.    |

**Returns:** [*SpotifyPlugin*](spotifyplugin.spotifyplugin-1.md)

Defined in: [SpotifyPlugin.ts:15](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyPlugin.ts#L15)

## Properties

### options

• `Readonly` **options**: [*SpotifyManagerOptions*](../interfaces/spotifymanager.spotifymanageroptions.md)

The spotify manager options.

Defined in: [SpotifyPlugin.ts:10](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyPlugin.ts#L10)

___

### spotify

• **spotify**: [*SpotifyManager*](spotifymanager.spotifymanager-1.md)

The spotify manager.

Defined in: [SpotifyPlugin.ts:15](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyPlugin.ts#L15)

## Methods

### load

▸ **load**(`manager`: *Manager*): *Promise*<*void*\>

Called whenever this plugin gets loaded.

#### Parameters:

Name | Type |
------ | ------ |
`manager` | *Manager* |

**Returns:** *Promise*<*void*\>

Defined in: [SpotifyPlugin.ts:37](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyPlugin.ts#L37)

___

### search

▸ **search**(`url`: *string*): *Promise*<*null* \| [*SpotifyItem*](abstract/spotifyitem.spotifyitem.md)\>

Searches spotify.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`url` | *string* | The URL to search for.    |

**Returns:** *Promise*<*null* \| [*SpotifyItem*](abstract/spotifyitem.spotifyitem.md)\>

Defined in: [SpotifyPlugin.ts:30](https://github.com/Lavaclient/plugins/blob/09b0c37/packages/spotify/src/SpotifyPlugin.ts#L30)
