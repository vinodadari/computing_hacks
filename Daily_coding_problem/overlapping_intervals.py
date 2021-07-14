'''
This problem was asked by Snapchat.

Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have been merged.

The input list is not necessarily ordered in any way.

For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].
'''
import unittest

def overlap_interval():
    data = sorted([(1, 3), (5, 8), (4, 10), (20, 25)])
    # c_data = len(data)
    print(data)
    inter: data[1] -> data[3]
    print(data)
    # for i in range(c_data + 1):
    #     data[i][1]

    # for interval in data:
    #     print(interval[0])
    exit()

class TestOverlap(unittest.TestCase):

    def test_equal(self):
        expected = [(1, 3), (4, 10), (20, 25)]
        output = 'overlap_interval()'
        # output = overlap_interval()

        self.assertEqual(output, expected)

if __name__ == "__main__":
    # unittest.main()
    overlap_interval()
