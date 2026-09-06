#!/usr/bin/env python3
"""Module that defines a type-annotated function sum_mixed_list."""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return the sum of a list of integers and floats as a float."""
    return sum(mxd_lst)
