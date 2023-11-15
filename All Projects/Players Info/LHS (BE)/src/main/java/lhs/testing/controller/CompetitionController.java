package lhs.testing.controller;

import lhs.testing.dto.CompetitionDTO;
import lhs.testing.dto.TeamDTO;
import lhs.testing.entity.Competition;
import lhs.testing.entity.Team;
import lhs.testing.form.competition.CreateCompetitionForm;
import lhs.testing.form.competition.UpdateCompetitionForm;
import lhs.testing.service.ICompetitionService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/competitions")
public class CompetitionController {

    @Autowired
    ModelMapper modelMapper;
    @Autowired
    ICompetitionService competitionService;

    @GetMapping
    public List<CompetitionDTO> getAllCompetitions() {
        List<Competition> competitions = competitionService.getAllCompetitions();
        List<CompetitionDTO> competitionDTOS = modelMapper.map(competitions, new TypeToken<List<CompetitionDTO>>() {
        }.getType());
        return competitionDTOS;

    }

    @PostMapping
    public void createCompetition(@RequestBody CreateCompetitionForm form) {
        competitionService.createCompetition(form);
    }

    @PutMapping(value = "/{id}")
    public void updateCompetition(@PathVariable(name = "id") int id, @RequestBody UpdateCompetitionForm form) {
        form.setId(id);
        competitionService.updateCompetition(form);
    }

    @DeleteMapping(value = "/{ids}")
    public void deleteCompetitions(@PathVariable(name = "ids") List<Integer> ids) {
        competitionService.deleteCompetitions(ids);
    }
}

