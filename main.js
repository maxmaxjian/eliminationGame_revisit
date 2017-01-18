
class solution {
    lastRemaining(n) {
	var lastArr = new Array();
	var i = 0
	lastArr.push(n)
	while (lastArr[lastArr.length-1]-this.power(2,i) > 0) {
	    var last
	    if ((Math.ceil(lastArr[lastArr.length-1]/this.power(2,i)-1)+1)%2 != 0)
		last = lastArr[lastArr.length-1]-this.power(2,i)
	    else {
		if (i%2 != 0)
		    last = lastArr[lastArr.length-1]-this.power(2,i)
		else
		    last = lastArr[lastArr.length-1]
	    }
	    lastArr.push(last);
	    i++;
	}
	console.log(lastArr)
	return lastArr[lastArr.length-1]
    }

    power(base, n) {
	if (n == 0)
	    return 1
	else
	    return base*this.power(base,n-1)
	    
    }

    brute_force(n) {        
	var vec = []
	for (var i = 1; i <= n; i++)
	    vec.push(i);
        if (vec.length < 20)
            console.log(vec)
        var i = 0;        
        while (vec.length > 1) {
            var next = []
            if (i%2 == 0) {
                for (var j = 0; j < vec.length; j++)
                    if (j%2 != 0)
                        next.push(vec[j])
            }
            else {
                if (vec.length%2 == 0) {
                    for (var j = 0; j < vec.length; j++) {
                        if (j%2 == 0)
                            next.push(vec[j])
                    }
                }
                else {
                    for (var j = 0; j < vec.length; j++)
                        if (j%2 != 0)
                            next.push(vec[j])
                }
            }
            if (next.length < 20)
                console.log(next)
            vec = next
            i++;
        }
        return vec[0]
    }
}

var n = 190
var soln = new solution()
var last = soln.lastRemaining(n)
console.log("The last remaining number is: "+last)
var ans_last = soln.brute_force(n)
if (last == ans_last)
    console.log("True")
