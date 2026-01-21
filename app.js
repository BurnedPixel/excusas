function changeExcuse() {
    let who = ['Oshino Meme', 'The Crab Oddity', 'Senjougahara', 'A stray Rainy Devil', 'Araragi’s shadow'];
    let action = ['stole the weight of', 'bound by a contract', 'stapled', 'aberrantly altered', 'erased the memory of'];
    let what = ['my golden week', 'the stationery', 'my courage', 'the white snake shrine', 'the red bicycle'];
    let when = [
        'under the abandoned cram school roof', 
        'during the summer break of hell', 
        'while walking to the Shirahebi Shrine', 
        'at exactly 00:00 on the cultural festival day', 
        'during a 15-minute conversation at the park'
    ];

    let excuse = who[Math.floor(Math.random() * who.length)] + ' ' +
                 action[Math.floor(Math.random() * action.length)] + ' ' +
                 what[Math.floor(Math.random() * what.length)] + ' ' +
                 when[Math.floor(Math.random() * when.length)] + '.';
    
    document.getElementById('excuse').innerHTML = excuse;
    console.log("Excuse generated!");
}

// 1. Run when the page finishes loading
window.addEventListener('load', changeExcuse);

// 2. Run when the button is clicked (assuming your button has id="btn")
document.getElementById('btn').addEventListener('click', changeExcuse);