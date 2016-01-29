import header from './shared/header';

const layout = (props = {}) => {

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>${props.title}</title>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <!--link rel="shortcut icon" href="images/favicon.ico"-->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
            <link rel="stylesheet" href="/css/main.css">
        </head>
        <body>

            ${header({
                activePage: props.activePage
            })}

            <div class="content-container">
                ${props.content ? props.content : ''}
            </div>

            <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
            <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
            <script type="text/javascript" src="/js/main.js"></script>

        </body>
        </html>
    `;
};

export default layout;
