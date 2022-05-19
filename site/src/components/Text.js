import Download from "./Download";

const Text = () => {
        return (
        <div id="text-container">
            {/* <p class="text">So, this is your gift...download it, I guess...</p>
            <h1 class="h1-directions" id="h1-directions-1">REQUIREMENTS</h1>
            <p class="text">This only works on Windows. That's it</p>
            <h1 class="h1-directions" id="h1-directions-">DIRECTIONS</h1>
            <p class="text">So, just download it. It should take about 30 seconds more or less.</p>
            &nbsp;
            &nbsp; */}

        <div id="install-components">
            <h1 id="text-components-install">Install the Components</h1>
            <div id="download-flex">
                <ul>
                    <li>Contains everything you need</li>
                    <li>Yeah, that's it</li>
                </ul>
                <Download/>
            </div>
        </div>
        
        </div>
        );
}


export default Text



