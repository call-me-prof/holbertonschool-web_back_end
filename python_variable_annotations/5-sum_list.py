#!/usr/bin/env python3
"""Module that defines a type-annotated function sum_list."""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Return the sum of a list of floats as a float."""
    return sum(input_list)
