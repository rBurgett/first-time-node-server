const header = (props = {}) => {

    return `
    <div class="header-container">
        <div class="title-container">
            <h1 class="title">My Static Website</h1>
        </div>
        <div class="custom-nav-container">
            <div class="nav-item-container">
                <a href="/" title="Home">
                    <div class="nav-item ${(props.activePage === 'home') ? 'active' : ''}">Home</div>
                </a>
            </div>
            <div class="nav-item-container">
                <a href="/about" title="About">
                    <div class="nav-item ${(props.activePage === 'about') ? 'active' : ''}">About</div>
                </a>
            </div>
        </div>
    </div>
    `;
};

export default header;
