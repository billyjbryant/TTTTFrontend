const selectCropType = async () => {
    let selection = 'cam-top';
    changeSelection = () => {
        const cropSelector = document.getElementById("cropType");
        const preview = document.getElementById("cropPreview");
        selection = cropSelector.options[cropSelector.selectedIndex].value;
        preview.src=`images/crops/${selection}.png`;
    }
    let popup = SafeSwal.fire({
        title: 'Select crop type',
        html: /*html*/`
        <div style='margin-top: 10px' width="100%" id="cropTypeDiv">
            <div id="cropSelectorDiv">
                <select name="cropType" id="cropType" class="crop-selector" onchange="changeSelection();">
                    <option value="none" default disabled selected>Choose a FaceCam Crop</option>
                    <option value="cam-top">Cam on Top</option>
                    <option value="no-cam">No Cam</option>
                    <option value="freeform">Freeform</option>
                    <option value="cam-freeform">Freeform w/ Cam</option>
                    <option value="mask">Masked Cam</option>
                    <option value="mask-freeform">Freeform w/ Masked Cam</option>
                </select>
            </div>
            <div id="cropPreviewDiv">
                <img 
                    id="cropPreview" 
                    class="crop-preview" 
                    src="images/crops/cam-top.png" 
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