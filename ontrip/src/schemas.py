from pydantic import BaseModel as BaseSchema

class Path(BaseSchema):
    start: str
    end: str
