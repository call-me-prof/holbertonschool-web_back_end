#!/usr/bin/env python3
"""Module that defines an async generator coroutine."""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """Loop 10 times, wait 1 second, and yield a random number 0-10."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
