const token = () => {
    const otp = ``;
    for(let i = 0; i < 6; i++){
        const genToken = Math.round(Math.random() * 9);
        otp += genToken; 
    }
    return otp;
};