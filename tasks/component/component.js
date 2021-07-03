
import {ComponentPaths, ComponentTemplatesPaths} from '../folders_path/components_path.js';
import { CustomFile } from '../common/files_actions.js';
import { CustomFolder } from '../common/folders_actions.js';
import { FileName } from  '../common/filename_actions.js';


export class ReactComponent
{
    constructor(component_name)
    {
      this.filename                  =  new FileName();
      this.lower_component_name      =  this.filename.lowercaseFirstLetter(component_name);
      this.capital_component_name    =  this.filename.capitalizeFirstLetter(component_name);
      this.folders_paths             =  ComponentPaths;
      this.templates_paths           =  ComponentTemplatesPaths;
    }

    generate_components_files()
    {
      for( var filename of Object.keys(this.folders_paths))
      {

        let new_folder_path = this.folders_paths[filename];
        this.create_file(filename, new_folder_path);
      }
    }


    async create_file(filename, new_folder_path)
    {
      let customFile      = new CustomFile();
      let new_file_path   = new_folder_path+`/${this.capital_component_name}.js`;
      customFile.create_file( new_file_path );
      customFile.copy_file( this.templates_paths[filename], new_file_path );
      await this.filename.replace_text(new_file_path, '/Name/name.js', `/${this.lower_component_name}/${this.capital_component_name}.js`);
      await this.filename.replace_text(new_file_path, 'ComponentName', `${this.capital_component_name}`);
    }

}
