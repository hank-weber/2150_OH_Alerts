function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function onPageLoad(){
  var paragraphs = document.getElementsByTagName('p');
  var count = 0;
  var elem;
  for (var i = 0; i < paragraphs.length; i++)
  {
    elem = paragraphs[i];
    if (elem.innerHTML) {
      if (elem.innerHTML.startsWith("There are") && elem.innerHTML.endsWith("people in this list")) {
        if (count == 1) {
          var numWaiting = parseInt(elem.innerHTML.charAt(10), 10);
          chrome.runtime.sendMessage({OHCount: numWaiting, message:"There are people on the queue."}, function(response) {});
        }
        count += 1;
      }
    }
  }
  await sleep(15000);
  window.location = "https://libra.cs.virginia.edu/~pedagogy/queue.php";
}

onPageLoad();