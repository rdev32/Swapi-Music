type GetPlaylistImgs = {
    height: number
    width: number
    url: string
}
export type IPlaylist = {
    collaborative: boolean
    description: string
    external_urls: {
        spotify: string
    }
    href: string
    id: string
    images: GetPlaylistImgs[]
    name: string
    owner: {
        display_name: string
        external_urls: {
            spotify: string
        }
        href: string
        id: string
        type: string
        uri: string
    }
    public: boolean
    snapshot_id: string
    tracks: {
        href: string
        total: number
    }
    type: string
    uri: string
}
export type GetPlayList = {
    items: IPlaylist[]
}

/*
  {
    "collaborative": false,
    "description": "",
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/3t1NiaH3CTaNIJfvUJ1cAZ"
    },
    "href": "https://api.spotify.com/v1/playlists/3t1NiaH3CTaNIJfvUJ1cAZ",
    "id": "3t1NiaH3CTaNIJfvUJ1cAZ",
    "images": [
      {
        "height": 640,
        "url": "https://mosaic.scdn.co/640/ab67616d0000b2732270d3bd1d13133edf0be836ab67616d0000b2736017bca98dea58ceddea77c1ab67616d0000b2736538b8e1b5c7b2a9d2211769ab67616d0000b273a38af5bbda76202e9d9eb8fd",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://mosaic.scdn.co/300/ab67616d0000b2732270d3bd1d13133edf0be836ab67616d0000b2736017bca98dea58ceddea77c1ab67616d0000b2736538b8e1b5c7b2a9d2211769ab67616d0000b273a38af5bbda76202e9d9eb8fd",
        "width": 300
      },
      {
        "height": 60,
        "url": "https://mosaic.scdn.co/60/ab67616d0000b2732270d3bd1d13133edf0be836ab67616d0000b2736017bca98dea58ceddea77c1ab67616d0000b2736538b8e1b5c7b2a9d2211769ab67616d0000b273a38af5bbda76202e9d9eb8fd",
        "width": 60
      }
    ],
    "name": "The Best of Red Velvet",
    "owner": {
      "display_name": "Milton Garcia",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/g%C4%93%C3%B8ex%C4%99_gt"
      },
      "href": "https://api.spotify.com/v1/users/g%C4%93%C3%B8ex%C4%99_gt",
      "id": "gēøexę_gt",
      "type": "user",
      "uri": "spotify:user:g%C4%93%C3%B8ex%C4%99_gt"
    },
    "primary_color": null,
    "public": true,
    "snapshot_id": "NjUsODcyZjBkZjUxOGUwOTBlMGQxZTZkMTliODY4NzY4ZDIzM2ZlMDBiNQ==",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/3t1NiaH3CTaNIJfvUJ1cAZ/tracks",
      "total": 57
    },
    "type": "playlist",
    "uri": "spotify:playlist:3t1NiaH3CTaNIJfvUJ1cAZ"
  }*/
