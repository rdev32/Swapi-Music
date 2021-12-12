export default function typeSizeCreen(size: number) {
    switch (size) {
        case 576:
            return 2
            break
        case 768:
            return 3
            break
        case 1024:
            return 4
            break
        case 1440:
            return 7
            break
        case 1990:
            return 8
            break
        case 2560:
            return 9
            break
        default:
            return 2
            break
    }
}
