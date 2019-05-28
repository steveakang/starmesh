		var scene = new THREE.Scene(); //Scene for Map of Earth 
        var scene2 = new THREE.Scene(); //Scene for satellites

        var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
        
        //-tempate-
        var renderer = new THREE.WebGLRenderer();
        renderer.autoClear = false;
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        //-template
        //Altitude of Satellites predefined //


        var zo = camera.getFocalLength();
        console.log("This is the field of View" + zo);
        
        //-satelite---1/
        var geometry = new THREE.SphereBufferGeometry( 3.5, 8, 26, 0, 6.3, 0, 3.3 );
        var material = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
        var sat1 = new THREE.Mesh( geometry, material );
        scene2.add( sat1 );
        //-positions/
        /* Random coordinate for x axis */
        var sat1x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat1x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        var altitude = 0;
        sat1.position.x = sat1x;
        sat1.position.z = altitude;
        console.log(sat1x);
        console.log(altitude);
        //end

        var sat1y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat1y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat1.position.y = sat1y;
        console.log(sat1y);
        //end



        // // //-satellite---2/
        var sat2 = new THREE.Mesh( geometry, material );
        scene2.add( sat2 );
        //-positions/
         /* Random coordinate for x axis */
         var sat2x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
         sat2x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat2.position.x = sat2x;
         sat2.position.z = altitude;
         console.log(sat2x);
         //end
         var sat2y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
         sat2y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat2.position.y = sat2y;
         console.log(sat2y);
         //end

         //-satellite---3/
         var sat3 = new THREE.Mesh( geometry, material );
         scene2.add( sat3 );
         //-positions/
         /* Random coordinate for x axis */
         var sat3x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
         sat3x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat3.position.x = sat3x;
         sat3.position.z = altitude;
         console.log(sat3x);
         //end
         var sat3y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
         sat3y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat3.position.y = sat3y;
         console.log(sat3y);
         //end

         //-satellite---4/
         var sat4 = new THREE.Mesh( geometry, material );
         scene2.add( sat4 );
         //-positions/
         /* Random coordinate for x axis */
         var sat4x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
         sat4x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat4.position.x = sat4x;
         sat4.position.z = altitude;
         console.log(sat4x);
         //end
         var sat4y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
         sat4y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat4.position.y = sat4y;
         console.log(sat4y);
         //end


         //-satellite---5/
        //  var geometry = new THREE.SphereBufferGeometry( 4, 3, 26, 0, 1.4, 2, 2.9 );
        //  var material = new THREE.MeshBasicMaterial( { color: 0x0000FF, side: THREE.DoubleSide } );
         var sat5 = new THREE.Mesh( geometry, material );
         scene2.add( sat5 );
         //-positions/
         /* Random coordinate for x axis */
         var sat5x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
         sat5x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat5.position.x = sat5x;
         sat5.position.z = altitude;
         console.log(sat5x);
         //end
         var sat5y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
         sat5y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat5.position.y = sat5y;
         console.log(sat5y);
         //end

         //-satellite---6/
         var sat6 = new THREE.Mesh( geometry, material );
         scene2.add( sat6 );
         //-positions/
         /* Random coordinate for x axis */
         var sat6x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
         sat6x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat6.position.x = sat6x;
         sat6.position.z = altitude;
         console.log(sat6x);
         //end
         var sat6y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
         sat6y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat6.position.y = sat6y; 
         console.log(sat6y);
         //end



         //-satellite---7/
         var sat7 = new THREE.Mesh( geometry, material );
         scene2.add( sat7 );
         //-positions/
         /* Random coordinate for x axis */
         var sat7x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
         sat7x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat7.position.x = sat7x;
         sat7.position.z = altitude;
         console.log(sat7x);
         //end
         var sat7y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
         sat7y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat7.position.y = sat7y; 
         console.log(sat7y);
         //end



         //-satellite---8/
         var sat8 = new THREE.Mesh( geometry, material );
         scene2.add( sat8 );
         //-positions/
         /* Random coordinate for x axis */
         var sat8x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
         sat8x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat8.position.x = sat8x;
         sat8.position.z = altitude;
         console.log(sat8x);
         //end

         var sat8y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
         sat8y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat8.position.y = sat8y; 
         console.log(sat8y);
         //end

        //-satellite---9/
         var sat9 = new THREE.Mesh( geometry, material );
         scene2.add( sat9 );
        //-positions/
         /* Random coordinate for x axis */
         var sat9x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
         sat9x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
         sat9.position.x = sat9x;
         sat9.position.z = altitude;
         console.log(sat9x);
         //end
        var sat9y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat9y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat9.position.y = sat9y; 
        console.log(sat9y);
         //end


        //-satellite---10/
        var sat10 = new THREE.Mesh( geometry, material );
        scene2.add( sat10 );
         //-positions/
        /* Random coordinate for x axis */
        var sat10x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat10x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat10.position.x = sat10x;
        sat10.position.z = altitude;
        console.log(sat10x);
        //end

        var sat10y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat10y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat10.position.y = sat10y; 
        console.log(sat10y);
        //end




        //-satellite---11/
        var sat11 = new THREE.Mesh( geometry, material );
        scene2.add( sat11 );
        //-positions/
        /* Random coordinate for x axis */
        var sat11x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat11x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat11.position.x = sat11x;
        sat11.position.z = altitude;
        console.log(sat11x);
        //end
        var sat11y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat11y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat11.position.y = sat11y; 
        console.log(sat11y);
         //end


         //-satellite---12/
        var sat12 = new THREE.Mesh( geometry, material );
        scene2.add( sat12 );
        //-positions/
        /* Random coordinate for x axis */
        var sat12x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat12x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat12.position.x = sat12x;
        sat12.position.z = altitude;
        console.log(sat12x);
        //end
        var sat12y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat12y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat12.position.y = sat12y; 
        console.log(sat12y);
        //end


        //-satellite---13/
        var sat13 = new THREE.Mesh( geometry, material );
        scene2.add( sat13 );
        //-positions/
        /* Random coordinate for x axis */
        var sat13x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat13x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat13.position.x = sat13x;
        sat13.position.z = altitude;
        console.log(sat13x);
        //end
        var sat13y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat13y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat13.position.y = sat13y; 
        console.log(sat13y);
        //end



        //-satellite---14/
        var sat14 = new THREE.Mesh( geometry, material );
        scene2.add( sat14 );
        //-positions/
        /* Random coordinate for x axis */
        var sat14x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat14x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat14.position.x = sat14x;
        sat14.position.z = altitude;
        console.log(sat14x);
        //end
        var sat14y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat14y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat14.position.y = sat14y; 
        console.log(sat14y);
        //end



        //-satellite---15/
        var sat15 = new THREE.Mesh( geometry, material );
        scene2.add( sat15 );
        //-positions/
        /* Random coordinate for x axis */
        var sat15x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat15x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat15.position.x = sat15x;
        sat15.position.z = altitude;
        console.log(sat15x);
        //end
        var sat15y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat15y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat15.position.y = sat15y; 
        console.log(sat15y);
        //end


        //-satellite---16/
        var sat16 = new THREE.Mesh( geometry, material );
        scene2.add( sat16 );
        //-positions/
        /* Random coordinate for x axis */
        var sat16x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat16x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat16.position.x = sat16x;
        sat16.position.z = altitude;
        console.log(sat16x);
        //end
        var sat16y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat16y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat16.position.y = sat16y; 
        console.log(sat16y);
        //end


        //-satellite---17/
        var sat17 = new THREE.Mesh( geometry, material );
        scene2.add( sat17 );
        //-positions/
        /* Random coordinate for x axis */
        var sat17x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat17x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat17.position.x = sat17x;
        sat17.position.z = altitude;
        console.log(sat17x);
        //end
        var sat17y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat17y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat17.position.y = sat17y; 
        console.log(sat17y);
        //end


        //-satellite---18/
        var sat18 = new THREE.Mesh( geometry, material );
        scene2.add( sat18 );
        //-positions/
        /* Random coordinate for x axis */
        var sat18x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat18x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat18.position.x = sat18x;
        sat18.position.z = altitude;
        console.log(sat18x);
        //end
        var sat18y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat18y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat18.position.y = sat18y; 
        console.log(sat18y);
        //end


        //-satellite---19/
        var sat19 = new THREE.Mesh( geometry, material );
        scene2.add( sat19 );
        //-positions/
        /* Random coordinate for x axis */
        var sat19x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat19x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat19.position.x = sat19x;
        sat19.position.z = altitude;
        console.log(sat19x);
        //end
        var sat19y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat19y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat19.position.y = sat19y; 
        console.log(sat19y);
        //end



        //-satellite---20/
        var sat20 = new THREE.Mesh( geometry, material );
        scene2.add( sat20 );
        //-positions/
        /* Random coordinate for x axis */
        var sat20x = Math.floor(Math.random()*215) + 0; // this will get a number between 1 and 99;
        sat20x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat20.position.x = sat20x;
        sat20.position.z = altitude;
        console.log(sat20x);
        //end
        var sat20y = Math.floor(Math.random()*100) + 0; // this will get a number between 1 and 99;
        sat20y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat20.position.y = sat20y; 
        console.log(sat20y);
        //end


        //-satellite---21/
        var sat21 = new THREE.Mesh( geometry, material );
        scene2.add( sat21 );
        //-positions/
        /* Random coordinate for x axis */
        var sat21x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat21x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat21.position.x = sat21x;
        sat21.position.z = altitude;
        console.log(sat20x);
        //end
        var sat21y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat21y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat21.position.y = sat21y; 
        console.log(sat21y);
        //end


        //-satellite---22/
        var sat22 = new THREE.Mesh( geometry, material );
        scene2.add( sat22 );
        //-positions/
        /* Random coordinate for x axis */
        var sat22x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat22x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat22.position.x = sat22x;
        sat22.position.z = altitude;
        console.log(sat22x);
        //end
        var sat22y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat22y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat22.position.y = sat22y; 
        console.log(sat22y);
        //end


        //-satellite---23/
        var sat23 = new THREE.Mesh( geometry, material );
        scene2.add( sat23 );
        //-positions/
        /* Random coordinate for x axis */
        var sat23x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat23x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat23.position.x = sat23x;
        sat23.position.z = altitude;
        console.log(sat23x);
        //end
        var sat23y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat23y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat23.position.y = sat23y; 
        console.log(sat23y);
        //end


        //-satellite---24/
        var sat24 = new THREE.Mesh( geometry, material );
        scene2.add( sat24 );
        //-positions/
        /* Random coordinate for x axis */
        var sat24x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat24x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat24.position.x = sat24x;
        sat24.position.z = altitude;
        console.log(sat24x);
        //end
        var sat24y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat24y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat24.position.y = sat24y; 
        console.log(sat24y);
        //end


        //-satellite---25/
        var sat25 = new THREE.Mesh( geometry, material );
        scene2.add( sat25 );
        //-positions/
        /* Random coordinate for x axis */
        var sat25x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat25x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat25.position.x = sat25x;
        sat25.position.z = altitude;
        console.log(sat25x);
        //end
        var sat25y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat25y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat25.position.y = sat25y; 
        console.log(sat25y);
        //end

        //-satellite---20/
        var sat26 = new THREE.Mesh( geometry, material );
        scene2.add( sat26 );
        //-positions/
        /* Random coordinate for x axis */
        var sat26x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat26x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat26.position.x = sat26x;
        sat26.position.z = altitude;
        console.log(sat26x);
        //end
        var sat26y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat26y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat26.position.y = sat26y; 
        console.log(sat26y);
        //end

        //-satellite---20/
        var sat27 = new THREE.Mesh( geometry, material );
        scene2.add( sat27 );
        //-positions/
        /* Random coordinate for x axis */
        var sat27x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat27x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat27.position.x = sat27x;
        sat27.position.z = altitude;
        console.log(sat27x);
        //end
        var sat27y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat27y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat27.position.y = sat27y; 
        console.log(sat27y);
        //end


        //-satellite---28/
        var sat28 = new THREE.Mesh( geometry, material );
        scene2.add( sat28 );
        //-positions/
        /* Random coordinate for x axis */
        var sat28x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat28x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat28.position.x = sat28x;
        sat28.position.z = altitude;
        console.log(sat28x);
        //end
        var sat28y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat28y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat28.position.y = sat28y; 
        console.log(sat28y);
        //end


        //-satellite---29/
        var sat29 = new THREE.Mesh( geometry, material );
        scene2.add( sat29 );
        //-positions/
        /* Random coordinate for x axis */
        var sat29x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat29x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat29.position.x = sat29x;
        sat29.position.z = altitude;
        console.log(sat29x);
        //end
        var sat29y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat29y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat29.position.y = sat29y; 
        console.log(sat29y);
        //end

        //-satellite---30/
        var sat30 = new THREE.Mesh( geometry, material );
        scene2.add( sat30 );
        //-positions/
        /* Random coordinate for x axis */
        var sat30x = Math.floor(Math.random()*225) + 0; // this will get a number between 1 and 99;
        sat30x *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat30.position.x = sat20x;
        sat30.position.z = altitude;
        console.log(sat30x);
        //end
        var sat30y = Math.floor(Math.random()*115) + 0; // this will get a number between 1 and 99;
        sat30y *=  Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
        sat30.position.y = sat30y; 
        console.log(sat30y);
        //end



        //First Dot
        // var geometry = new THREE.PlaneGeometry( 15, 2, 32 );
        // var material = new THREE.MeshBasicMaterial( {color: 0xFF0000, side: THREE.OneSide} );
        // var dot1 = new THREE.Mesh( geometry, material );
        // scene2.add( dot1 );



        //second Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 10, sizeAttenuation: false, color: 0xFFA500} );
        var dot2 = new THREE.Points( dotGeometry, dotMaterial );
        scene2.add( dot2 );
        dot2.position.x = 37;
        dot2.position.y = 20;


        //Third Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 10, sizeAttenuation: false, color: 0xff0000} );
        var dot3 = new THREE.Points( dotGeometry, dotMaterial );
        scene2.add( dot3 );
        dot3.position.x = 109;
        dot3.position.y = -38;

        //Fourth Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 10, sizeAttenuation: false, color: 0x800000} );
        var dot4 = new THREE.Points( dotGeometry, dotMaterial );
        scene2.add( dot4 );
        dot4.position.x = -110;
        dot4.position.y = -15;

        

        //Sixth Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 11, sizeAttenuation: false, color: 0x000000} );
        var dot6 = new THREE.Points( dotGeometry, dotMaterial );
        scene2.add( dot6 );
        dot6.position.x = 145;
        dot6.position.y = 32;

        //Seventh Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 11, sizeAttenuation: false, color: 0x01ff00} );
        var dot7 = new THREE.Points( dotGeometry, dotMaterial );
        scene2.add( dot7 );
        dot7.position.x = 185;
        dot7.position.y = 64;

        //Eight Dot//
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( 0, 0, 0));
        var dotMaterial = new THREE.PointsMaterial( { size: 11, sizeAttenuation: false, color: 0xff471a} );
        var dot8 = new THREE.Points( dotGeometry, dotMaterial );
        scene2.add( dot8 );
        dot8.position.x = -125;
        dot8.position.y = 44;

        

        
        
        camera.position.set(0, 0, 100);
        camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

        // DOM Variables //

        // -- rendering start
        function animate() {
            requestAnimationFrame( animate );

            //--Animation--for rotating the element-----//
            rotate_all_satellites();
            orbit_all_satellites();
            //Blinking Dot ---//
            // dot1.rotation.x += 0.10;
            
            // send();


            
            //-------ends--------------//
            
          
            renderer.clear();
            renderer.render( scene, camera );
            renderer.clearDepth();
            renderer.render( scene2, camera );
        }
        animate();
        // -- rendering end
