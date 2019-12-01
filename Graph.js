 // noofcicles = marks range like 1 to 5
 // noofdivisions = how many parts we want to divide the circle
 // marksarry    
    var Draw = {
        style:{
            fontSize:'48px',
            fontStyle:'serif',
            },
        makeGraph: (canvaselement, noofcicles, noofdivisions, marksarry) => {           
            //draw circles
            var radius = canvaselement.width / 2;
            const ctx = canvaselement.getContext('2d');
            if(noofdivisions !==marksarry.length){
                ctx.font = Draw.style.fontSize+' '+Draw.style.fontStyle;
                ctx.fillText("Invalid data", radius/2, radius)
                return "0";
            }
            for (var i = 0; i < noofcicles; i++) {                
                ctx.beginPath();
                ctx.arc(radius, radius, radius - radius / noofcicles * i, 0, 2 * Math.PI, false);
                ctx.stroke();
            }
            //end
            /*draw divisions*/
            var angle_increment = (Math.PI/180)*(360/noofdivisions);
            var startangle_arry=[];
            for (var i = 0; i < noofdivisions; i++) {                
                ctx.beginPath();
                var start_angle = 0+angle_increment * i;
                startangle_arry.push(start_angle);
                var end_angle = angle_increment+start_angle;
                ctx.arc(radius, radius, radius, start_angle , end_angle, false);
                ctx.lineTo(radius, radius);
                ctx.stroke();           
            }
            // draw marks
            ctx.beginPath();
            marksarry.forEach((element,index) => {
                var x = radius+(radius/noofcicles)*element*Math.cos(startangle_arry[index]);
                var y = radius+(radius/noofcicles)*element*Math.sin(startangle_arry[index]);
                ctx.lineTo(x,y);                   
            });
            ctx.closePath();
            ctx.stroke();
        }
    }