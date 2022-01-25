const selectMaskType = async () => {
    let selection = 'circle';
    changeSelection = () => {
     const maskSelector = document.getElementById("maskType");
     const preview = document.getElementById("maskPreview");
     selection = maskSelector.options[maskSelector.selectedIndex].value;
     preview.src=`images/masks/${selection}.png`;
    }
    let popup = SafeSwal.fire({
        title: 'Select Camera Mask Type',
        html: /*html*/`
        <div style='margin-top: 10px' width="100%" id="maskTypeDiv">
            <div id="maskSelectorDiv">
                <select name="maskType" id="maskType" class="mask-selector" onchange="changeSelection();">
                    <option value="none" default disabled selected>Choose a FaceCam Mask</option>
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                    <option value="rounded">Rounded</option>
                    <option value="hexagon">Hexagon</option>
                    <option value="triangle">Triangle</option>
                    <option value="star-5">Star</option>
                    <option value="star-3">Star (3pt)</option>
                </select>
            </div>
            <div id="maskPreviewDiv">
                <img 
                    id="maskPreview" 
                    class="mask-preview" 
                    src="images/masks/circle.png" 
                />
            </div>
        </div>
        `,
        showCancelButton: true,
    }).then((result) => {
        if(result.dismiss == 'cancel') {
            return null;
        }
        console.log("Selection: " + selection); 
        return selection;
    });

    return popup;
}