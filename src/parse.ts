import dayjs from "dayjs"

export default async function parse(data: any) {

    data = data.map((item: any) => {
        item.date = dayjs(item.createdAt).format("YYYY-MM-DD HH:mm:ss")
        return item
    })

    return data
}
