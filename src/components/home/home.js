const home = (props = {}) => {
    return `
        <div class="home-container">
            <h2>Home</h2>
            <p>Hello and welcome to the homepage of my static site! Click about to learn more or try out our amazing adding tool below.</p>
            <h4>Want to add two numbers together?</h4>
            <form class="form-inline">
                <div class="form-group">
                    <input id="js-numInput1" class="form-control input-lg text-center" type="number" value="${props.num1 || ''}" required></input>
                </div>
                <div class="form-group">
                    <label>+</label>
                    <input id="js-numInput2" class="form-control input-lg text-center" type="number" value="${props.num2 || ''}" required></input>
                </div>
                <div class="form-group">
                    <label>=</label>
                    <input id="js-sumBox" class="form-control input-lg text-center" type="text" value="${props.sum || ''}" required readonly></input>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg">Show me the sum!</button>
                </div>
            </form>
        </div>
    `;
};

export default home;
