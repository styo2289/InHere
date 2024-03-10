import "./HomePage.css"

function HomePage () {
    return (
        <div className="pageLayout">
            <h1>HomePage</h1>
            <span className="gridBackground">
                <div className="pageContent">
                    <div className="item item-1">Item 1</div>
                    <div className="item item-2">Item 2</div>
                    <div className="item item-3">Item 3</div>
                    <div className="item item-4">Item 4</div>
                    <div className="item item-1">Item 5</div>
                    <div className="item item-2">Item 6</div>
                </div>
            </span>
        </div>
    )
}

export default HomePage;