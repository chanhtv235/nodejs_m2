// happy coding 👻
import {BubbleSort} from "./thuc_hanh/cai_dat_noi_boi";
import {BubbleSortByStep} from "./thuc_hanh/minh_hoa_sx_noi_bot";
import {SelectionSort} from "./thuc_hanh/cai_dat_sx_chon";

console.log("hello world");
//-----------------------------------
BubbleSort.bubbleSort(BubbleSort.list);
for (let i = 0; i < BubbleSort.list.length; i++)
    console.log(BubbleSort.list[i] + " ");
//---------------------------------------
console.log("\nBegin sort processing...");
BubbleSortByStep.bubbleSortByStep(BubbleSortByStep.numbers);
//-----------------------------------------
SelectionSort.selectionSort(SelectionSort.list);
for (let i = 0; i < SelectionSort.list.length; i++)
    console.log(SelectionSort.list[i] + " ");