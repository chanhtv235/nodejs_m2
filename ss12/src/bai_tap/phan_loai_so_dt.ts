export function phanLoaiSDT(array: Array<String>) {
    let vietTell: Array<String>=[];
    let mobile: Array<String>=[];
    let vinaPhone: Array<String>=[];
    const VIET_TELL =['096','097','098'];
    const MOBILE =['090','093','095'];
    const VINA =['091','094','092'];
    array.forEach(e=>{
        let first = e.slice(0,3);
        console.log("đầu số:" +first)
        if (VIET_TELL.includes(first)){
            vietTell.push(e);
        }else if (MOBILE.includes(first)){
            mobile.push(e)
        }else if (VINA.includes(first)){
            vinaPhone.push(e);
        }
    });
    console.log(vietTell);
    console.log(mobile);
    console.log(vinaPhone);

}