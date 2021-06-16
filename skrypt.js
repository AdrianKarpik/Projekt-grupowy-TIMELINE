let $licznik = 0;
let $daty = [];
let $roznice = [];
let $names = [];
let $z1 = document.createElement("div");
let $p1 = document.createElement("p");
let $z2 = document.createElement("div");
let $p2 = document.createElement("p");
let $z3 = document.createElement("div");
let $p3 = document.createElement("p");
let $z4 = document.createElement("div");
let $p4 = document.createElement("p");
let $z5 = document.createElement("div");
let $p5 = document.createElement("p");
let $z6 = document.createElement("div");
let $p6 = document.createElement("p");
let $z7 = document.createElement("div");
let $p7 = document.createElement("p");
let $z8 = document.createElement("div");
let $p8 = document.createElement("p");

document.addEventListener("DOMContentLoaded", () => {
    
    List = document.querySelector(".timeline");
    const todoForm = document.querySelector(".confirm");
    let date = document.querySelector(".date");
    let name = document.querySelector(".name");
    let central = document.querySelector('.timeline');
    let z1 = document.getElementById("z1");
    let z2 = document.getElementById("z2");
    let z3 = document.getElementById("z3");
    let z4 = document.getElementById("z4");
    let z5 = document.getElementById("z5");
    let z6 = document.getElementById("z6");
    let z7 = document.getElementById("z7");
    let z8 = document.getElementById("z8");
    

   	function vector(){
   		let vector = document.createElement("div");
   		vector.setAttribute('class', 'vector');
   		central.appendChild(vector);
   	}

   
        
    

    function add(date, name) {
        console.log("Dodaję zadarzenie do listy")

        if ($licznik==1){
        
        z1.setAttribute('class', 'one');
        z1.appendChild($z1);
        z1.appendChild($p1);
		$daty.push(date);
		$names.push(name);
		central.appendChild(z1);


		}

		if ($licznik==2) {
		vector();
		z2.setAttribute('class', 'one');
        z2.appendChild($z2);
        z2.appendChild($p2);
		$daty.push(date);
		$names.push(name);
		central.appendChild(z2);

		}

		if ($licznik==3) {
		vector();
		z3.setAttribute('class', 'one');
        z3.appendChild($z3);
        z3.appendChild($p3);
		$daty.push(date);
		$names.push(name);
		central.appendChild(z3);

		}

		if ($licznik==4) {
		vector();
		z4.setAttribute('class', 'one');
        z4.appendChild($z4);
        z4.appendChild($p4);
		$daty.push(date);
		$names.push(name);
		central.appendChild(z4);

		}

		if ($licznik==5) {
	 	vector();
	 	z5.setAttribute('class', 'one');
        z5.appendChild($z5);
        z5.appendChild($p5);
		$daty.push(date);
		$names.push(name);
		central.appendChild(z5);

		}

		if ($licznik==6) {
	 	vector();
	 	z6.setAttribute('class', 'one');
        z6.appendChild($z6);
        z6.appendChild($p6);
		$daty.push(date);
		$names.push(name);
		central.appendChild(z6);

		}

		if ($licznik==7) {
		vector();
		z7.setAttribute('class', 'one');
        z7.appendChild($z7);
        z7.appendChild($p7);
		$daty.push(date);
		$names.push(name);
		central.appendChild(z7);

		}

		if ($licznik==8) {
		vector();
		z8.setAttribute('class', 'one');
        z8.appendChild($z8);
        z8.appendChild($p8);
		$daty.push(date);
		$names.push(name);
		central.appendChild(z8);

		}
		

    }

     function sort (date, $daty, name){
    	console.log(date + name);

    
		$roznice.push(`${date}:${name}`);
        $roznice.sort();

    	
    	
    	
    	console.log($roznice);
    	
    		if ($roznice.length>0){
    			$z1.innerHTML = $roznice[0].slice(0,10);
    			$p1.innerHTML = $roznice[0].slice(11);
    		}
    	
    		if ($roznice.length>1){
    			$z2.innerHTML = $roznice[1].slice(0,10);
    	        $p2.innerHTML = $roznice[1].slice(11);
    		}
    	
    		if($roznice.length>2){
    			$z3.innerHTML = $roznice[2].slice(0,10);
    			$p3.innerHTML = $roznice[2].slice(11);
    		}
    	
    		if ($roznice.length>3) {
    			$z4.innerHTML = $roznice[3].slice(0,10);
    			$p4.innerHTML = $roznice[3].slice(11);
    		}
    	
    		if ($roznice.length>4){
    			$z5.innerHTML = $roznice[4].slice(0,10);
    			$p5.innerHTML = $roznice[4].slice(11);
    		}
    	
    		if ($roznice.length>5){
    			$z6.innerHTML = $roznice[5].slice(0,10);
    			$p6.innerHTML = $roznice[5].slice(11);
    		}
    	
    		if ($roznice.length>6){
    			$z7.innerHTML = $roznice[6].slice(0,10);
    			$p7.innerHTML = $roznice[6].slice(11);
    		}
    	
    		if ($roznice.length>7){
    			$z8.innerHTML = $roznice[7].slice(0,10);
    			$p8.innerHTML = $roznice[7].slice(11);
    		}
    	
		
	
	}

	

    

    todoForm.addEventListener("click", e => {
		e.preventDefault();       
        
        
        if((name.value!=='' )&&(date.value!=='')){
        	if ($licznik<=8) {
        		$licznik++;
        add(date.value,name.value);
         
        sort(date.value, $daty, name.value);
    	}

     
        }
         else{
        	alert("Uzuelnij wszystkie dane!");
        }
        
    
        
    });
		
   

   
});



 