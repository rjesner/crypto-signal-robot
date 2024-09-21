from flask import render_template, jsonify
from flask.views import View


class PolymorphicController(View):
    def get_objects(self):
        raise NotImplementedError("Implement the method")
    
    def get_template(self):
        raise NotImplementedError("Implement the method")
    
    @property
    def get_view_type(self):
        return "html"
    
    def dispatch_request(self):
        objects = self.get_objects()
        view_type = self.get_view_type
        if view_type == "html":
            return render_template(self.get_template(), objects=objects)
        return jsonify(objects)


class IndexPageController(PolymorphicController):
    
    def get_objects(self):
        return []
    
    def get_template(self):
        return "index.html"
