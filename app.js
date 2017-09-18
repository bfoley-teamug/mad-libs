var go = document.getElementById("button"); 

go.addEventListener('click', (e) => { 
  e.preventDefault(); 
  
  const wordA = document.getElementById("wordA"); 
  const inputA = wordA.querySelector('.inputA');
  
  const wordB = document.getElementById("wordB"); 
  const inputB = wordB.querySelector('.inputB');
  
  const wordC = document.getElementById("wordC"); 
  const inputC = wordC.querySelector('.inputC');
  
  const wordD = document.getElementById("wordD"); 
  const inputD = wordD.querySelector('.inputD');
  
  const wordE = document.getElementById("wordE"); 
  const inputE = wordE.querySelector('.inputE');
  
  const wordF = document.getElementById("wordF"); 
  const inputF = wordF.querySelector('.inputF');
  
  const wordG = document.getElementById("wordG"); 
  const inputG = wordG.querySelector('.inputG');
  
  const wordH = document.getElementById("wordH"); 
  const inputH = wordH.querySelector(".inputH");
  
  const wordI = document.getElementById("wordI"); 
  const inputI = wordI.querySelector(".inputI");
  
  const wordJ = document.getElementById("wordJ"); 
  const inputJ = wordJ.querySelector(".inputJ");
  
  var result = document.getElementById("result"); 
  const newWordA = inputA.value;
  const newWordB = inputB.value;
  const newWordC = inputC.value;
  const newWordD = inputD.value;
  const newWordE = inputE.value;
  const newWordF = inputF.value;
  const newWordG = inputG.value; 
  const newWordH = inputH.value; 
  const newWordI = inputI.value; 
  const newWordJ = inputJ.value; 
  
  const p = document.getElementById('result');
  console.log("Today I drove to the " + newWordA);
  
  p.innerHTML = "<p>This morning when I woke up in my <span class='highlight'>" + newWordA + "</span>,  I had a craving for some <span class='highlight'>" + newWordB + "</span>. I decided to find some <span class='highlight'>" + newWordB + "</span>, so I <span class='highlight'>" + newWordC + "</span> on over to the neighbor's house and knocked on their <span class='highlight'>" + newWordD +"</span>. They <span class='highlight'>" + newWordE + "</span> invited me inside and gave me some of their leftover <span class='highlight'>" + newWordB +"</span>. I asked how their new job was as a <span class='highlight'>" + newWordF + "</span> and they answered it was '<span class='highlight'>" + newWordG + "</span>' but their co-workers were <span class='highlight'>" + newWordH + "</span>. I said thanks for the <span class='highlight'>" + newWordB + "</span> and have a great day! As I walked out the <span class='highlight'>" + newWordD + "</span>, I waved and <span class='highlight'>" + newWordI + "</span>. I told myself I will give them some <span class='highlight'> " + newWordJ + "</span> as a token of my appreciation.</p>";               
 }); 
                 
                    