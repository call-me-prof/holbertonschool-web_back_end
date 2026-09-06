#!/usr/bin/env python3
"""Tasks module"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


def task_wait_n(n: int, max_delay: int) -> List[asyncio.Task]:
    """Spawns task_wait_random n times with the specified max_delay."""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    return [asyncio.ensure_future(task) for task in asyncio.as_completed(tasks)]
