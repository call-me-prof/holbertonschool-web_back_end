#!/usr/bin/env python3
"""Module that defines an async routine task_wait_n."""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn task_wait_random n times with the specified max_delay.

    Args:
        n (int): the number of tasks to spawn.
        max_delay (int): the maximum delay for each task.

    Returns:
        List[float]: the list of delays in ascending order,
        obtained without using sort(), relying on concurrency.
    """
    delays: List[float] = []
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    return delays
