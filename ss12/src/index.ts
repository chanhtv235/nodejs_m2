// happy coding 👻

import {FindBinary} from "./thuc_hanh/FindBinary";
import {findItemMiss} from "./thuc_hanh/FindLiner";
import {countElementInArray} from "./bai_tap/dem_so_lan_xuat_hien_phan_tu";
import {phanLoaiSDT} from "./bai_tap/phan_loai_so_dt";

console.log("hello world");
// test tìm kiếm tuyến tính
let array: Array<number>= [1,3,4,10,4,5,6,7,4];
let f = new FindBinary();
console.log(findItemMiss(array));
console.log(f.findFirstOccurrence(array,4));
// test bài tập
console.log(countElementInArray(array,4));
// phân loại số điện thoại
let danhBa: Array<string> =['0985987','0914876','09388']
phanLoaiSDT(danhBa);