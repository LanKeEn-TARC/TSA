var stateData = [];
$.ajax({
    type: "GET",
    url: "http://localhost:5501/Elly/State_and_Area.json",
    success: async function(data){
        console.log(data)
        stateData = await data
        stateData.forEach(state => {
            console.log(Object.keys(state));
            $("#state").append(`<option value="${Object.keys(state)[0]}">${Object.keys(state)[0]}</option>`);
            $("#stateO").append(`<option value="${Object.keys(state)[0]}">${Object.keys(state)[0]}</option>`);
        });
    }
});

$("#state").on("change",function(){
    if($("#state").val() === ""){
        $('#area').html(`<option value="">-- Select Area --</option>`);
     
    }
    else{
        $('#area').html(`<option value="">-- Select Area --</option>`);
     
        stateData.filter(function(state){
            if($("#state").val() === Object.keys(state)[0]){
                console.log(Object.values(state)[0])
                Object.values(state)[0].forEach(function(area){
                    $("#area").append(`<option value="${area}">${area}</option>`);
                });
            };
         
        });
    };
});

$("#stateO").on("change",function(){
    if($("#stateO").val() === ""){
        $('#areaO').html(`<option value="">-- Select Area --</option>`);
     
    }
    else{
        $('#areaO').html(`<option value="">-- Select Area --</option>`);
     
        stateData.filter(function(state){
            if($("#stateO").val() === Object.keys(state)[0]){
                console.log(Object.values(state)[0])
                Object.values(state)[0].forEach(function(area){
                    $("#areaO").append(`<option value="${area}">${area}</option>`);
                });
            };
         
        });
    };
});