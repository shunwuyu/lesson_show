package main
import "fmt"
func main() {
	var array1 [5]int

	fmt.Printf("array1: %d\n\n", array1)

	array2 := [5]int{12, 123, 1234, 12345, 123456}
	array2[1] = 5000
	fmt.Printf("array2: %d\n\n", array2[1]);

	var n [10]int
	var i, j int
	for i = 0; i < 10; i++ {
		n[i] = i + 100
	}
	for j = 0; j < 10; j++ {
		fmt.Printf("Element[%d] = %d\n", j, n[j]);
	}

	var a = [5][2]int{ {0,0}, {1,2}, {2,4}, {3,6}, {4,8}}
	var e, f int
	for e = 0; e < 5; e++ {
		for f = 0; f < 2; f++ {
			fmt.Printf("a[%d][%d] = %d\n", e, f, a[e][f]);
		}
	}
}