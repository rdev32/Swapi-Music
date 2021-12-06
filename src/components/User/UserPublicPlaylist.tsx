import { FC } from 'react'
import PlayList from '../../components/Spotify/Playlist/PlayList'
import { GetPlaylist } from '../../hooks/types/GetCurrentUserPlaylist'
import * as SFollow from '../../styles/components/User/Following.style'
import * as SSearch from '../../styles/pages/Search/Search.style'

const UserPublicPlaylist: FC<{ title: string; data?: GetPlaylist[] }> = ({
    title,
    data,
}) => {
    return (
        { data } && (
            <>
                <SSearch.SearchTitleCategory>
                    {title}
                </SSearch.SearchTitleCategory>
                <SFollow.ArtistCards height="248px">
                    {data?.map((playlist) => (
                        <PlayList key={playlist.id} playlist={playlist} />
                    ))}
                </SFollow.ArtistCards>
            </>
        )
    )
}

export default UserPublicPlaylist
