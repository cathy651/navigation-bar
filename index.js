const TIMEZONE = [-7,-4,+1,+2,+9,+8,+10]

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('#nav');
    const slider = document.getElementById('slider');
    let intervalId = 0;

    function updateSilder() {
        const activeTab = document.querySelector('.active');
        if(activeTab) {
            slider.style.width = activeTab.offsetWidth + 'px';
            slider.style.left = activeTab.offsetLeft + 'px';
        }
    }

    function checkActive(e) {
        const target = e.target;
        // Due to event delegation, we only track events on tab dom.
        if(target.className == 'tab') {
            document.querySelectorAll('li').forEach((tab) => {
                tab.classList.remove('active');      
            });
            let curTimeZone = TIMEZONE[target.id];
            document.querySelector('#time').innerHTML = getCurrentTime(curTimeZone);
            // We need to clear the previous interval when new click happens.
            if(intervalId !== 0) {
                clearInterval(intervalId);
            }   
            intervalId = setInterval(function(){
                document.querySelector('#time').innerHTML = getCurrentTime(curTimeZone);
            }, 1000);
            // Append 'active' when clicking the tab.
            target.classList.add('active');
            updateSilder();
        }
    };
  
    nav.addEventListener('mousedown', checkActive);
    // Update slider on window size changing.
    window.onresize = updateSilder;
});

function getCurrentTime(cityTimeZone) {
    function formatTime(n){return (n<10?'0':'') + n}
    let date = new Date();
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset() + cityTimeZone*60);
    return formatTime(date.getHours()) + ':' + formatTime(date.getMinutes()) + ':' + formatTime(date.getSeconds());
}