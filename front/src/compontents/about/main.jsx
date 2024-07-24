import About from "./About";

function Main() {
    const infor=[
        {
            id:0,
            title:'Thông tin về trang web chi tiết???',
            img:'https://media-cdn.tripadvisor.com/media/photo-s/15/c5/84/65/khong-gian-nha-hang-vu.jpg',
            content:'Đây là một trang web mang lại cho người dùng những tiện ích, thông tin về đồ ăn.Trang web mang đến những món ăn đặ trung của từng vùng miền. Những đặc sản, đặc sắc vùng miền mang lại cảm giác mới lạ và hấp dẫn'
        },
        {
            id:1,
            title:'Thụy Sỹ biết đến là mộ đất nước có ẩm thực phong phú.',
            img:'https://duhocthuysi.net/wp-content/uploads/2020/11/myyen97-194931024944-cheese-fondue-1346.jpg',
            content:'Không có bất kỳ vùng lãnh thổ nào không giáp biển lại chịu nhiều ảnh hưởng của nét ẩm thực của các quốc gia lân cận như Thuỵ Sĩ. Tuy nhiên đất nước này vẫn có nét rất riêng và thu hút nhiều du khách. Nếu một lần đã thưởng thức những món ăn ngon nơi này bạn khó có thể quên được hương vị thơm ngon và đậm nét văn hoá truyền thống của Thuỵ Sĩ.'
        },
        {
            id:2,
            title:'Ẩm thực xứ sở Hàn Quốc với món đặc trưng là Kim Chi.',
            img:'https://www.chudu24.com/wp-content/uploads/2018/06/Jeonju-Bibimbap.jpg',
            content:'Trong văn hoá ẩm thực Hàn Quốc, đồ ăn của họ mang đậm nét văn hoá cổ truyền từ xưa tới nay, với những món ăn như Kimchi, Bibimbap, những nồi lẩu nấm nghi ngút khói và đặc biệt là món sườn nướng Hàn Quốc thì dường như những món ăn này đã trở thành nét truyền thống trong văn hoá ẩm thực Hàn Quốc. Với 12 món ăn tiêu biểu dưới đây, ta có thể thấy được một số nét tiêu biểu trong văn hoá ẩm thực của Hàn Quốc'
        },
        {
            id:3,
            title:'Ẩm thực của Việt Nam vô cùng phong phú và hấp dẫn. Các món ăn mang bản sắc dân tộc.',
            img:'https://img.tastykitchen.vn/resize/764x-/2021/01/31/am-thuc-viet-nam-0-f7ac.jpg',
            content:'Ẩm thực Việt Nam là cách gọi của phương thức chế biến món ăn, nguyên lý pha trộn gia vị và những thói quen ăn uống nói chung của cộng đồng người Việt và các dân tộc thuộc Việt Nam trên đất nước Việt Nam. Tuy có ít nhiều sự khác biệt, ẩm thực Việt Nam vẫn bao hàm ý nghĩa khái quát nhất để chỉ tất cả những món ăn phổ biến trong cộng đồng các dân tộc thiểu số nhưng đã tương đối phổ thông trong cộng đồng người Việt.'
        }
    ]
    return (
            <div className="about">
                <h2 className="about__heading">Introduction</h2>
                    { infor.map((item, index)=>(
                        <div key={index}>
                            <About id={item.id} item={item.title} content={item.content} img={item.img} />
                        </div>
                    ))}
            </div>
    )
}

export default Main;