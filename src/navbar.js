function navBar() {
    document.body.append(createHeader());
    document.body.append(createNavLinks());
    wrapperActivetoggle();
    
}


function createHeader() {
    const header = document.createElement('header');
    header.classList.add('nav-header');


    // Menu buttons
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'active';

    const menuBtn = document.createElement('label');
    menuBtn.for = 'active';
    menuBtn.classList.add('menu-btn');
    const menuBtnSpan = document.createElement('span');
    menuBtn.append(menuBtnSpan);

    const close = document.createElement('label');
    close.for = 'active';
    close.classList.add('close');

    const menuIcon = document.createElement('div');
    menuIcon.classList.add('menu-icon');
    menuIcon.append(input);
    menuIcon.append(menuBtn);
    menuIcon.append(close);

   

    header.append(menuIcon);
    
    return header
}

function createNavLinks() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    // Creates Unordered List
    const unList = document.createElement('ul');
    unList.append(createNavList('Home', '#'));
    unList.append(createNavList('Store', '#'));
    unList.append(createNavList('Explore', '#'));
    unList.append(createNavList('Library', '#'));
    unList.append(createNavList('About', '#'));
    unList.append(createNavList('Contact', '#'));
    wrapper.append(unList);

    return wrapper
}

// Creates a List with an anchor tag for navigation bar
function createNavList(name, link) {
    const list = document.createElement('li');
    const a = document.createElement('a');

    // attaches href to link parameter
    a.href = link;
    // Connects name text into name parameter
    a.innerText = name;

    list.append(a);

    return list;
}

// Adds active class on wrapper
function wrapperActivetoggle() {
    const menuicon = document.querySelector('.menu-icon');
    const wrapper = document.querySelector('.wrapper');
    
    menuicon.addEventListener('click', function() {
        menuicon.classList.toggle('active');
    
        if(menuicon.classList.contains('active')) {
            wrapper.classList.add('active');
        } else {
            wrapper.classList.remove('active')
        }
    })
};

export { navBar }
