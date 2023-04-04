let profile = {
    fname: 'Code',
    lname: 'Gym',
    bday: new Date('1979-01-02')
}
let fname1 = profile.fname;
let lname1 = profile.lname;
console.log(fname1, lname1);
// bài làm
let {fname,lname,bday} =profile;
console.log(fname,lname,bday)