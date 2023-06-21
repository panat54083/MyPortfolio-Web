export const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 640){
        return { right: !menuOpened && "-100%"};
    }
};