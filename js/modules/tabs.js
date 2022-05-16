function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activClass) {
    const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);


    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade'); 
        });
        tabs.forEach(item => {
            item.classList.remove(activClass);
        });
    }

    function showTabActive(i = 1) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activClass);
    }

    hideTabContent();
    showTabActive();


    tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabActive(i);
            }
        });
    }
});
}

export default tabs;