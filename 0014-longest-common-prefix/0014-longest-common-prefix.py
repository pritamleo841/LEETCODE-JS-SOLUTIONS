class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        prefix = ""
        if not strs:  # Equivalent to `if(strs.length === 0) return prefix;`
            return prefix

        for i in range(len(strs[0])):  # Loop through characters of the first word
            char = strs[0][i]
            for j in range(len(strs)):  # Loop through all words
                if i >= len(strs[j]) or strs[j][i] != char:  # Ensure index is in bounds
                    return prefix
            prefix += char  # Append matching character
    
        return prefix