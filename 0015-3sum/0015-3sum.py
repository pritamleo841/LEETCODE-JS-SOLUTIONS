class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result = []

        nums.sort()  # Sort the list first

        # Loop through each element
        for i in range(len(nums) - 2):
            # Skip duplicate elements
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            target = -nums[i]
            left, right = i + 1, len(nums) - 1

            while left < right:
                total = nums[left] + nums[right]

                if total == target:
                    result.append([nums[i], nums[left], nums[right]])

                    # Skip duplicate elements on the left
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    # Skip duplicate elements on the right
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1

                    left += 1
                    right -= 1

                elif total > target:
                    right -= 1
                else:
                    left += 1

        return result
