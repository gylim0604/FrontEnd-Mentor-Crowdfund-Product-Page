export const BookmarkIcon = ({ active }) => {
    let bg = '#2F2F2F';
    let bg_active = 'hsl(176, 72%, 28%)';
    let fill = '#B1B1B1';
    let fill_active = '#fff';
    return (
        <svg width='56' height='56' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
                <circle fill={active ? bg_active : bg} cx='28' cy='28' r='28' />
                <path
                    fill={active ? fill_active : fill}
                    d='M23 19v18l5-5.058L33 37V19z'
                />
            </g>
        </svg>
    );
};

export const MastercraftLogo = ({}) => {
    return (
        <svg width='56' height='56' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
                <circle fill='#000' cx='28' cy='28' r='28' />
                <g fillRule='nonzero'>
                    <path
                        d='M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z'
                        fill='#444'
                    />
                    <path
                        d='M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z'
                        fill='#FFF'
                    />
                </g>
            </g>
        </svg>
    );
};

export const ModalClose = () => {
    return (
        <svg width='15' height='15' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z'
                fill='#000'
                fillRule='evenodd'
                opacity='.4'
            />
        </svg>
    );
};

export const CheckIcon = () => {
    return (
        <svg width='64' height='64' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
                <circle fill='#3CB3AB' cx='32' cy='32' r='32' />
                <path
                    stroke='#FFF'
                    strokeWidth='5'
                    d='M20 31.86L28.093 40 44 24'
                />
            </g>
        </svg>
    );
};
