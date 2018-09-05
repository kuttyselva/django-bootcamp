def myfun(par):
        print("frst call{}".format(par));
        return("hii")
xval=myfun('default')
print (xval)

mylist=[1,2,3,4,5,6,7,8,9]
def checkeve(num):
    return num%2 ==0
res=filter(checkeve,mylist)
print(res)
defs=filter(lambda num:num%2==0,mylist)
print(defs)
