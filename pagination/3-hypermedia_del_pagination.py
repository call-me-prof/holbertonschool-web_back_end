#!/usr/bin/env python3
"""Module that defines a deletion-resilient hypermedia pagination Server."""
import csv
from typing import Dict, List


class Server:
    """Server class to paginate a database of popular baby names."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initialize the Server instance."""
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cache and return the dataset."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Return the dataset indexed by sorting position, starting at 0."""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }

        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None,
                         page_size: int = 10) -> Dict:
        """Return a dictionary with deletion-resilient pagination info."""
        data_dict = self.indexed_dataset()
        max_index = max(data_dict.keys())
        assert index is not None and 0 <= index <= max_index

        data = []
        current_index = index

        while len(data) < page_size and current_index <= max_index:
            if current_index in data_dict:
                data.append(data_dict[current_index])
            current_index += 1

        return {
            'index': index,
            'next_index': current_index,
            'page_size': len(data),
            'data': data,
        }
