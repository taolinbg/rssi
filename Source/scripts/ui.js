/*
 * Initiates all Jquery UI. Tabs and Accordions are used.
 * TODO: Convert unwanted Tabs into DIVs with CSS
 * */
function initiateUI() {
    console.log('UI Initiated')
    $("#tabs").tabs();
    $("#infoTab").tabs();
    $("#servers").tabs();
    $("#radio").buttonset();
    $("#databases").tabs();
    $("#collections").tabs();
    $("#accesspoints").tabs();
    $("#floor_infos").tabs();
    $("#accordion").accordion({
        collapsible: true,
        active: 0
    });
}

/*
 * updateFloorInfoUi
 * */
function updateFloorInfoUi(data){
    $('#floor_info-1').empty()
    $('#floor_info-1').append("<b>Number of Measurement Points : </b>" + locationData.length)
    $('#floor_info-1').append("<br>")
    $('#floor_info-1').append("<b>Number of RSSIs measured at the selected Point: </b>" + data.scan)
    $('#floor_info-1').append("<br>")
    $('#floor_info-1').append("<b>Latency measured at the selected Point: </b>" + data.latency)
}


/*
 * Update the node details in Tab
 * */
function updateNodeDataUI(data) {
    $('#infoTab-1').empty()
    $('#infoTab-1').append("<br>")
    $('#infoTab-1').append("<b>SSID : </b>" + selectedSsidData[0].sender_ssid)
    $('#infoTab-1').append("<br>")
    $('#infoTab-1').append("<b>BSSID : </b>" + selectedSsidData[0].sender_bssid)
    $('#infoTab-1').append("<br>")
    $('#infoTab-1').append("<b>Total Number of measurements: </b>" + selectedSsidData.length)
    $('#infoTab-1').append("<br>")
    $('#infoTab-1').append("<br>")
    $('#infoTab-1').append("<b>Node Label : </b>" + data.node_label)
    $('#infoTab-1').append("<br>")
    $('#infoTab-1').append("<b>Room Label : </b>" + data.room_label)
    $('#infoTab-1').append("<br>")
    $('#infoTab-1').append("<b>Coordinate X : </b>" + data.coordinate_x)
    $('#infoTab-1').append("<br>")
    $('#infoTab-1').append("<b>Coordinate Y : </b>" + data.coordinate_y)
}


/*
 * open up the graph Panel
 * */
function showGraphPanel() {
    $("#accordion").accordion({
        active: 2
    })
}

/*
* Clear The SVG of Graph
*/
function clearGraph(){
    $("#graph").empty()
}
