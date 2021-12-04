import styled from '@emotion/styled'

export const UserStyle = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: ${({ width }: { width?: string }) => (width ? width : '420px')};
    justify-content: space-between;
`

export const UserBody = styled.main`
    margin: 65px 0 110px 270px;
`
