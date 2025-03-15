
export default function Header() {
    return (
        <div className="header">
            <div class="main-header">
                <h1>Truyện 24H</h1>
                <input type="text" id="Search" placeholder="Tìm truyện" />
                <button type="submit">Tìm</button>
                <div class="login">
                    <p>Đăng nhập</p>
                    <ul>
                        <li><a href="#">Đăng nhập</a></li>
                        <li><a href="#">Đăng ký</a></li>
                    </ul>
                </div>
            </div>


        </div>
    )
}
/**
 * <div class="nav">
                <ul>
                    <li><a href="#">Trang chủ</a></li>
                    <li><a href="#">Truyện mới</a></li>
                    <li><a href="#">Truyện hot</a></li>
                    <li><a href="#">Truyện full</a></li>
                    <li><a href="#">Thể loại</a></li>
                    <li><a href="#">Tác giả</a></li>
                    <li><a href="#">Liên hệ</a></li>
                </ul>
            </div>
 */