function relativyTheory(mass){
   const SPEED_OF_LIGHT  = 299792458n;
   let energy = BigInt(mass) * (SPEED_OF_LIGHT ** 2n) / 3600000n;

   const formatEnergy = new Intl.NumberFormat('pt-BR');
   
   return console.log("Energy from a mass of " + mass + " kg is: " + formatEnergy.format(energy) + " kWh");
   }
   
relativyTheory(67)