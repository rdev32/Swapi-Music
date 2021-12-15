import styled from '@emotion/styled'
import { FC } from 'react'
import { GetCategories } from '../../../hooks/types/GetCategories'
import Category from './Category/Category'

const Container = styled.main`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

interface IProps {
    Categories: GetCategories['categories']
}

const Categories: FC<IProps> = ({ Categories }) => {
    return (
        <main>
            <h2>Browse All</h2>
            <Container>
                {Categories?.items?.map((category) => (
                    <Category key={category.id} category={category} />
                ))}
            </Container>
        </main>
    )
}

export default Categories
