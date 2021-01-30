class Solution:
    def isPalindrome(self, x) -> bool:
        reversed = 0
        ognum = x
        newnum = 0
        
        if x < 0:
            return False
        else:
            while x > 0:
                reversed = (reversed * 10) + (x % 10)
                x = int(x/10) 
                newnum = x + reversed
                
            if ognum == newnum:
                return True
            else:
                return False