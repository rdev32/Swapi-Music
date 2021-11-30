import styled from '@emotion/styled'
import { FC, useState } from 'react'
import { Items } from '../../../../hooks/types/GetCategories'
import Link from 'next/link'
import UserImage from '../../../Spotify/UserImage/UserImage'

const Card = styled.a`
    display: flex;
    justify-content: flex-start;
    width: 310px;
    border: none;
    height: 144px;
    background-color: ${({ bgcolor }: { bgcolor: string }) => bgcolor};
    border-radius: 10px;
    color: white;
    padding: 10px;
    margin: 10px;
`
const Title = styled.p`
    width: 200px;
    font-size: 18px;

    overflow: hidden;
`
interface IProps {
    category: Items
}

const colors: string[] = [
    '#ff6b35',
    '#004e89',
    '#f9dc5c',
    '#0ad3ff',
    '#0ead69',
    '#dc136c',
    '#8f3985',
    '#8b80f9',
    '#78D92B',
    '#2660a4',
    '#59c9a5',
    '#43281c',
]

const Category: FC<IProps> = ({ category }) => {
    const [color] = useState(Math.floor(Math.random() * colors.length))
    return (
        <Link href={`/Search?type=${category.id}`} passHref>
            <Card bgcolor={colors[color]}>
                <Title>{category.name}</Title>
                <UserImage url={category.icons[0].url} bradius={10} />
            </Card>
        </Link>
    )
}

export default Category
